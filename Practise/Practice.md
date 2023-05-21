### Module-8.5: Simple Mongoose Practice

#### Problems & Solutions
**Task 1:** Find all users who are located in New York.
```js
db.peoples.find({"address.city": "New York"})
          .projection({"address.city": 1, name: 1}) //with projection
```

**Task 2:** Find the user(s) with the email "johndoe@example.com" and retrieve their favorite movie.
```js
db.peoples.find({email: "johndoe@example.com"})
```

**Task 3:** Find all users with "pizza" as their favorite food and sort them according to age.
```js
db.peoples.find({"favorites.food": "pizza"})
          .sort({ age:1 })
```

**Task 4**: Find all users over 30 whose favorite color is "green".
```js
db.peoples.find({$and: [{age: {$gt: 30}}, {"favorites.color": "green"}]})
//        .projection({"favorites.color": 1, name: 1, age: 1})
```

**Task 5:** Count the number of users whose favorite movie is "The Shawshank Redemption."
```js
db.peoples.find({"favorites.movie": "The Shawshank Redemption"})
          .count()
```


**Task 6:** Update the zipcode of the user with the email "johndoe@example.com" to "10002".
```js
db.peoples.updateOne({email: "johndoe@example.com"}, 
                     {$set: {"address.zipcode": "10002"}})
```

**Task 7:** Delete the user with the email "alicewilliams@example.com" from the user data.
```js
db.peoples.deleteOne({email: "alicewilliams@example.com"})
```

**Task 8**: Group users by their favorite movie and retrieve the average age in each movie group.
```js
db.peoples.aggregate([{
    $group: { _id: "$favorites.movie", totalPerson: {$sum: 1}, avgAge: {$avg: "$age"}},
}])
```

**Task 9:** Calculate the average age of users with a favorite " pizza " food.
```js
db.peoples.aggregate([
    { $match: { "favorites.food": "pizza" } },
    { $group: { _id: {favouriteFood: "$favorites.food"}, totalPerson: { $sum: 1 }, avgAge: { $avg: "$age" } } }
]
)
```

**Task 10:** Perform a lookup aggregation to retrieve the orders data along with the customer details for each order.
```js
db.peoples.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "email",
            foreignField: "customerEmail",
            as: "ordersInfo"
        }
    },
    {
        $project: {"email": 1, "ordersInfo": 1}  //projection with email & ordersInfo
    }
]
)
```