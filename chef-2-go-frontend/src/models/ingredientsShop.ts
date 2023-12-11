interface IngredientsShop {
    _id: string,
    name: string,
    stores: [
        {
            name: string,
            location: string
        }
    ]
}

export const IngridentsShops: IngredientsShop[] = [
    {
        _id: "65763f8d36b3dc9d1857663a",
        name: "Bread",
        stores: [
            {
                name: "Mikes Pastry",
                location: "https://www.google.com/maps/place/Mike's+Pastry+-+Assembly+Row/@42.3781168,-71.1072471,14z/data=!3m1!5s0x89e370df265be7ad:0x679a93a589257a33!4m10!1m2!2m1!1sMike's+Pastry!3m6!1s0x89e370df25265bff:0xf6f420a65214fc95!8m2!3d42.3920045!4d-71.0781754!15sCg1NaWtlJ3MgUGFzdHJ5IgOIAQFaDyINbWlrZSdzIHBhc3RyeZIBDGRlc3NlcnRfc2hvcOABAA!16s%2Fg%2F11c79txw5n?entry=ttu"
            }
        ],
    }
]
export default IngredientsShop;