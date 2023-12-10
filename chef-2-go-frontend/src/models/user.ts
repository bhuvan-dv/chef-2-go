type user = {
    id: number,
    name: string,
    email: string,
    password: string,
    role: "chef" | "customer" | "admin",
    username: string,
    imageUrl: string,
    isVerified?: boolean,
    isPremiumUser?: boolean,
}

export default user;