import { currentUser } from "@clerk/nextjs/server";
import prisma from "./db";

export const checkUser = async () => {
  const user = await currentUser();

  //check for current logged in clerk user

  if (!user) return null;

  // if the user is alrady in the database

  const loggedInUser = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // If user is in databse then return user

  if (loggedInUser) return loggedInUser;

  //If not in database, create new user

  const newUser = await prisma.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,

      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
