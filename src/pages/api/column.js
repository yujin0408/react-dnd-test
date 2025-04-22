// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      res.status(201).send(req.body);
      break;

    case "GET":
      res.send([
        {
          id: 1,
          title: "column 01",
          dashboardId: 10,
        },
        {
          id: 2,
          title: "column 02",
          dashboardId: 11,
        },
        {
          id: 3,
          title: "column 03",
          dashboardId: 12,
        },
        {
          id: 4,
          title: "column 04",
          dashboardId: 13,
        },
      ]);
      break;

    default:
      res.status(404).send();
      break;
  }
}
