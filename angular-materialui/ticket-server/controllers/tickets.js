import express from "express";
import mongoose from "mongoose";

import Ticket from "../models/tickets.js";
import moment from "moment";

export const addTicket = async (req, res) => {
  const {ticket_id, ticket_description} = req.body;
  console.log("User", req.user)
  const newTicket = new Ticket({
    ticket_id : ticket_id,
    ticket_description: ticket_description,
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: {firstName: req.user.firstName, lastName: req.user.lastName, email: req.user.email, id: req.user.id}
  });
  try {
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getTickets = async (req, res) => {
  console.log("req", req.query)
  const {pageSize, pageIndex, sortType, sortDirection, searchKeyword} = req?.query;
  console.log("pageSize",)
  const sortObject = {};
  const stype = sortType;
  console.log(30,stype);
  const sdir = sortDirection;
  console.log(32,sdir);
  sortObject[stype] = sdir;
  console.log('sortObject = ', sortObject);
  const regex = new RegExp(searchKeyword, 'i');

  try {
    const ticket = await Ticket
      .find({
        $and: [
          {
            $or: [{ ticket_id: regex }, { ticket_description: regex }],
          }
        ],
      })
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .sort(
        sortObject, //descending order sort
      )
      .exec();

    const total = (
      await Ticket
        .find({
          $and: [
            {
              $or: [{ ticket_id: regex }, { ticket_description: regex }],
            },
          ],
        })
        .exec()
    ).length;

    res.status(200).json({tickets: ticket, total: total});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTicket = async (req, res) => {
  const ticket = req.body;
  const { id } = req.params;
  console.log("req body",req.body)
  console.log("id",id)
  const { ticket_id, ticket_description } = req.body;
  console.log("req.body ::",req.body,"id :",id)
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No ticket with id: ${id}`);
  const updatedTicket = {
    ...ticket, 
    ticket_id,
    ticket_description,
    updatedAt: new Date(),
    _id: id,
  };
  console.log("updatedTicket :::",updatedTicket)
  await Ticket.findByIdAndUpdate(id, updatedTicket, { new: true });
  res.json(updatedTicket);
};

export const resolveTicket = async (req, res) => {
  const { id } = req.query;
  console.log("req::",req.query)
  const ticket = await Ticket.findById(id);
  if(!ticket) {
    return res.status(404).send(`No ticket with id: ${id}`);
  }

  const newticket = {
    ...ticket,
    resolved: true
  }
  await Ticket.findByIdAndUpdate(id, newticket);
  res.status(200).json({message: "Resolved"});
};

export const getTicketsByName = async (req, res) => {
  const { searchQuery } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const posts = await Ticket.find({
      $or: [{ empname: new RegExp(".*" + searchQuery + ".*") }],
    }).sort({ Date: -1 });

    res.json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
