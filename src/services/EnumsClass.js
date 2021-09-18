class EnumsClass {
    status = {
        notStarted:"notStarted",
        loading:"loading",
        loaded:"loaded",
        failed:"failed"};
    role = {
        guest: "guest",
        user: "user",
        manager: "manager",
        admin: "admin"
    }
    // role = {
    //     unknown: {
    //         name: "unknown",
    //         position: 1
    //     },
    //     user: {
    //         name: "user",
    //         position: 2
    //     },
    //     manager:{
    //         name: "manager",
    //         position: 3
    //     },
    //     admin: {
    //         name: "4",
    //         position: 4
    //     },
    // }
}
const AppENUMS = new EnumsClass();
export default AppENUMS;
