import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactdata");

    fs.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body),
      (err) => {
        if (err) {
          console.error("File write error:", err);
          return res
            .status(500)
            .json({ status: "error", message: "Failed to save data" });
        }

        res.status(200).json({ status: "success", data: req.body });
      }
    );
  } else {
    res.status(200).json(["allBlogs"]);
  }
}
