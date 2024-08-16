import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { ReuseableLoading } from "@/components/custom/ReuseableLoading";
import { useAllLocations, useDetailLocation, useUpdateLocation } from "@/api/query/LocationQuery"
import { LocationResponseDataValue } from "@/types"
import { toast } from "sonner"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  parent_id: z.string().min(1, 'Parent Location is required.'),
});

const LocationEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading: isPending } = useAllLocations();
  const { data: locationDetail, isLoading: detailLoading } = useDetailLocation(Number(id));

  const locationData: LocationResponseDataValue[] = data?.data ?? [];

  const { mutateAsync: updateLocation, isPending: updatePending } = useUpdateLocation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: locationDetail?.data?.name || "",
      parent_id: locationDetail?.data?.parent?.id?.toString() || "",
    },
  });

  useEffect(() => {
    if (locationDetail) {
      form.reset({
        name: locationDetail.data.name || "",
        parent_id: locationDetail.data?.parent?.id?.toString() || "",
      });
    }
  }, [locationDetail, form]);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const payload = {
      name: values.name,
      parent_id: Number(values.parent_id),
      id: Number(id)
    };

    const data = await updateLocation(payload);

    if (data?.data) {
      toast.success("Successfully updated location.");
      navigate('/location');
    }
  };

  return (
    isPending || detailLoading ? 'Loading' : (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="bg-gray-50 shadow-md lg:w-6/12 p-8"
        >
          <FormField
            control={form.control}
            name="parent_id"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="mb-2 text-black">Parent Location</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className={`${fieldState.invalid ? 'border-red-500 focus:ring-0 ' : ''}`}>
                      <SelectValue placeholder="Select a parent location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {locationData.map(location => (
                      <SelectItem key={location.id} value={location.id.toString()}>{location.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem className="mt-4">
                <FormLabel className="mb-2 text-black">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Input Location Name"
                    type="text"
                    {...field}
                    className={`${fieldState.invalid ? 'border-red-500 focus-visible:ring-transparent' : ''}`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-4 w-full justify-center flex">
            <ReuseableLoading loading={updatePending} type="submit" btnText="Save" />
          </div>
        </form>
      </Form>
    )
  );
}

export default LocationEdit;
