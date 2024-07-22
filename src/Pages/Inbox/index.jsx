import React from "react";
import { Search } from "lucide-react";

export default function index() {
  return (
    <div className="flex h-screen w-full bg-white p-4 rounded-xl ">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h1 className="text-xl font-semibold">Inbox</h1>
          <div className="flex space-x-2">
            <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded">
              All Mail
            </button>
            <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded">
              Unread
            </button>
          </div>
        </div>

        <div className="p-4  flex mx-4 items-center justify-end gap-2">
          <input
            type="text"
            placeholder="Start Search..."
            className="w- p-2  rounded"
          />
          <Search />
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <Msg />
        </div>
      </div>

      <div className="w-1/3 border-l border-border p-4">
        <div className="flex items-center mb-4">
          <img
            src="https://placehold.co/40x40"
            alt="User Avatar"
            className="rounded-full mr-2"
          />
          <div>
            <h2 className="font-semibold">William Smith</h2>
            <p className="text-muted-foreground">Meeting Tomorrow</p>
            <p className="text-muted-foreground">
              Reply-To: williamsmith@example.com
            </p>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">Oct 22, 2023, 9:00:00 AM</p>
        <p className="text-muted-foreground mb-4">
          Hi, let's have a meeting tomorrow to discuss the project. I've been
          reviewing the project details and have some ideas I'd like to share.
          It's crucial that we align on our next steps to ensure the project's
          success.
        </p>
        <p className="text-muted-foreground mb-4">
          Please come prepared with any questions or insights you may have.
          Looking forward to our meeting!
        </p>
        <p className="text-muted-foreground mb-4">Best regards, William</p>
        <div className="mt-4">
          <textarea
            className="w-full p-2 border border-border rounded mb-2"
            placeholder="Reply William Smith..."
          ></textarea>
          <div className="flex items-center">
            <input type="checkbox" id="mute" className="mr-2" />
            <label for="mute" className="text-muted-foreground">
              Mute this thread
            </label>
          </div>
          <button className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function Msg() {
  return (
    <div className="p-4 border border-border rounded bg-card">
      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold">William Smith</h2>
          <p className="text-muted-foreground">Meeting Tomorrow</p>
        </div>
        <span className="text-muted-foreground">5 months ago</span>
      </div>
      <p className="mt-2 text-muted-foreground">
        Hi, let's have a meeting tomorrow to discuss the project details and
        have some ideas I'd like to share. It's crucial that we align on our
        next steps to ensure the project's...
      </p>
      <div className="mt-2 flex space-x-2">
        <span className="bg-muted text-muted-foreground px-2 py-1 rounded">
          meeting
        </span>
        <span className="bg-muted text-muted-foreground px-2 py-1 rounded">
          work
        </span>
        <span className="bg-muted text-muted-foreground px-2 py-1 rounded">
          important
        </span>
      </div>
    </div>
  );
}
