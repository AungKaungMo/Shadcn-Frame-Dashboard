import { useAuthStore } from "@/store/auth-store";

export const checkRole = (user_role: string[]): boolean => {
  const { getUser } = useAuthStore();
  const user = getUser();

  if (user && user.role) {  
    const roles = user.role; 
    const hasMatchingRole = roles.some((role) => user_role.includes(role)); 
    return !hasMatchingRole;
  }

  return true;
};