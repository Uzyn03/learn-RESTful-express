const express = require("express");
const {v4: uuidv4} = require("uuid");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    id: uuidv4(),
    username: "john_doe",
    comment: "This is a great post, I really enjoyed it!",
  },
  {
    id: uuidv4(),
    username: "jane_smith",
    comment: "I completely agree with your points, very insightful.",
  },
  {
    id: uuidv4(),
    username: "alex_king",
    comment: "Can you provide more details on the topic? I'm curious.",
  },
  {
    id: uuidv4(),
    username: "emily_brown",
    comment: "Thank you for sharing this information, very helpful.",
  },
  {
    id: uuidv4(),
    username: "michael_lee",
    comment: "I learned something new today, great job!",
  },
  {
    id: uuidv4(),
    username: "sarah_jones",
    comment: "This is exactly what I was looking for, thanks!",
  },
  {
    id: uuidv4(),
    username: "david_wilson",
    comment: "I have a different opinion, but this is still a great read.",
  },
  {
    id: uuidv4(),
    username: "olivia_clark",
    comment: "Very well written, I enjoyed the examples you provided.",
  },
  {
    id: uuidv4(),
    username: "liam_miller",
    comment: "Interesting perspective, I'll definitely look into it more.",
  },
  {
    id: uuidv4(),
    username: "chloe_anderson",
    comment:
      "I think the article could have explained this point in more detail.",
  },
  {
    id: uuidv4(),
    username: "ethan_thomas",
    comment: "I disagree with some parts, but overall it was a good post.",
  },
  {
    id: uuidv4(),
    username: "madison_taylor",
    comment: "Awesome! I'll be sharing this with my friends.",
  },
  {
    id: uuidv4(),
    username: "lucas_martin",
    comment: "This topic is so relevant to what's going on right now.",
  },
  {
    id: uuidv4(),
    username: "ava_harris",
    comment: "This article gave me a fresh perspective, thank you!",
  },
  {
    id: uuidv4(),
    username: "noah_robinson",
    comment: "I would love to see a follow-up post on this subject!",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/create", (req, res) => {
  res.render("comments/create");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) =>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", { comment });
})

app.get("/order", (req, res) => {
  res.send("GET order response");
});
app.post("/order", (req, res) => {
  const { item, qty } = req.body;
  res.send(`POST response item: ${item} - qty: ${qty}`);
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
