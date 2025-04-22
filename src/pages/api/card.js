export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      res.status(201).send(req.body);
      break;

    case "GET":
      res.send([
        {
          id: 1,
          title: "card 01",
          description: "카드 설명 입니다.",
          tags: ["태그"],
          columnId: 1,
        },
      ]);
      break;

    case "PUT":
      res.status(200).send(req.body);
      break;

    default:
      res.status(404).send();
      break;
  }
}
