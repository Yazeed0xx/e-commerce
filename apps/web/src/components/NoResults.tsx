"use client";
import React from "react";
import { Button } from "@/components/ui/button";

interface NoResultsProps {
  onClearFilters: () => void;
}

export const NoResults: React.FC<NoResultsProps> = ({ onClearFilters }) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-lg font-semibold mb-2">No products found</h3>
      <p className="text-muted-foreground mb-4">
        Try adjusting your search or filter criteria
      </p>
      <Button onClick={onClearFilters}>Clear All Filters</Button>
    </div>
  );
};
