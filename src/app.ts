import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";

const app = express();

app.use("/api/notes", notesRoutes);

app.use((res, req, next) => {
  next(Error("Error Point not Found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "An Unknown error  Occurred";
  if (error instanceof Error) errorMessage = error?.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
