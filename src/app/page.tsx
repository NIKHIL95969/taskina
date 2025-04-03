"use client"

import { ListItem } from "@/components/ui-list-item";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [pages, setPages] = useState([
    { id: "page1", name: "Page 1", selected: false },
    { id: "page2", name: "Page 2", selected: false },
    { id: "page3", name: "Page 3", selected: false },
    { id: "page4", name: "Page 4", selected: false },
  ]);

  const allSelected = pages.every(page => page.selected);
  const someSelected = pages.some(page => page.selected) && !allSelected;

  const handlePageSelect = (id: string) => {
    setPages(pages.map(page => 
      page.id === id ? { ...page, selected: !page.selected } : page
    ));
  };

  const handleSelectAll = (checked: boolean) => {
    setPages(pages.map(page => ({ ...page, selected: checked })));
  };

  const handleDone = () => {
    console.log("Selected pages:", pages.filter(page => page.selected));
    // Add your logic for what happens when Done is clicked
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center w-full">
        <div className="w-fit bg-white rounded-[6px] shadow-md overflow-hidden p-4 border border-gray-100">
          <div className="space-y-3">
            <ListItem 
              text="All pages" 
              checked={allSelected}
              onCheckedChange={handleSelectAll}
            />
            <hr className="border-gray-200"/>
            {pages.map((page) => (
              <ListItem
                key={page.id}
                text={page.name}
                checked={page.selected}
                onCheckedChange={() => handlePageSelect(page.id)}
              />
            ))}
            <hr className="border-gray-200"/>
            <div className="pt-3">
              <Button onClick={handleDone}>Done</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}