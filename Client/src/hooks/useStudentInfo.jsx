import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import useAxiosSecure from "./useAxiosSecure";

const useStudentInfo = () => {

    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data: userInfo = {} , refetch} = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/student/studentInfo?email=${localStorage.email}`);

            return res.data;
        }
    })

    // console.log(userInfo);

    
    // Ensure userInfo is not undefined before destructuring
    const user = userInfo || [];
    
    console.log(user);

    

    return [user, refetch];

    // return [user, refetch];
};

export default useStudentInfo;