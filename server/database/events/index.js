import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      start: {
        type: String,
        required: true,
      },
      end: {
        type: String,
      },
});

export const EventsModel = mongoose.model("Company", eventsSchema);
