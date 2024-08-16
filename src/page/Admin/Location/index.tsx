import { DataTable } from "@/components/data-table"
import { columns } from "./components/columns"
import { CirclePlusIcon } from "lucide-react"
import { LocationResponseDataValue} from '@/types';
import { Link } from "react-router-dom"
import { useAllLocations } from "@/api/query/LocationQuery"

const Location = () => {
    const { data, isLoading: isPending } = useAllLocations();

    const locationData: LocationResponseDataValue[] = data?.data ?? [];
    return (
        isPending ? 'Loading' : (
          <div>
            <div className="flex justify-between">
              <h3 className="font-bold text-xl">Location</h3>
              <div className="p-1 px-4 cursor-pointer hover:opacity-70 rounded-md bg-muted me-1">
                <Link to='new'>
                  <CirclePlusIcon width={18} className="text-foreground" />
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <DataTable columns={columns} data={locationData} />
            </div>
          </div>
        )
      );
      
}

export default Location;