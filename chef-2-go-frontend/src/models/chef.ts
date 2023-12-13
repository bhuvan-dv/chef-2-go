interface chef {
    name?: string;
    username: string;
    role: "admin" | "chef" | "customer"; // Define specific role values
    _id: string;
    imageUrl?: string,
}

export default chef;
