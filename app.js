const http=require("http")

http.createServer((req,res)=>{
	res.write("Today we started node js\n\n\n")
	res.write("Today we started node js\n\n\n")
	res.end()
}).listen(2002)