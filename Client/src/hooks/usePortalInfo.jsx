import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import useAxiosSecure from "./useAxiosSecure";

const usePortalInfo = () => {

    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data: portalInfo = {} , refetch} = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:3000/result?id=${localStorage.id}`);

            return res.data;
        }
    })

    console.log(portalInfo);

    
    // Ensure userInfo is not undefined before destructuring
    const portal = portalInfo || [];
    
    console.log(portal);

    

    return [portal, refetch];

    // return [user, refetch];
};

export default usePortalInfo;