import express from "express"



const app = express();

const PORT = 5000
app.get("/", (req, res) => {
  res.send("Hello from Docker running on EC2 🚀");
});

app.get("/login",(req,res)=>{
  res.send("your are loged in");

})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})