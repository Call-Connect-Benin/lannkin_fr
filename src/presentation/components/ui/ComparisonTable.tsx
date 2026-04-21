"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { fadeInUp } from "@/presentation/animations/variants";
import { useInView } from "@/presentation/hooks";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  label: string;
  values: (string | boolean)[];
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
  highlightColumn?: number;
  className?: string;
}

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-accent" aria-label="Oui" />
    ) : (
      <X className="mx-auto h-5 w-5 text-muted" aria-label="Non" />
    );
  }
  return <span>{value}</span>;
}

export function ComparisonTable({
  headers,
  rows,
  highlightColumn,
  className,
}: ComparisonTableProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={cn("w-full overflow-x-auto", className)}
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((header, colIndex) => (
              <th
                key={header}
                className={cn(
                  "border-b border-surface-light px-4 py-3 text-left font-heading text-xs font-semibold uppercase tracking-wider text-muted",
                  colIndex === 0 && "text-left",
                  colIndex > 0 && "text-center",
                  highlightColumn !== undefined &&
                    colIndex === highlightColumn &&
                    "border-x-2 border-t-2 border-accent bg-accent/5 text-accent",
                )}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={row.label}
              className={cn(
                "transition-colors hover:bg-surface-light/50",
                rowIndex % 2 === 0 && "bg-surface/50",
              )}
            >
              <td className="border-b border-surface-light px-4 py-3 font-body text-[#2d2d2d]">
                {row.label}
              </td>
              {row.values.map((value, colIndex) => (
                <td
                  key={`${row.label}-${colIndex}`}
                  className={cn(
                    "border-b border-surface-light px-4 py-3 text-center text-[#2d2d2d]",
                    highlightColumn !== undefined &&
                      colIndex + 1 === highlightColumn &&
                      "border-x-2 border-accent bg-accent/5",
                    rowIndex === rows.length - 1 &&
                      highlightColumn !== undefined &&
                      colIndex + 1 === highlightColumn &&
                      "border-b-2",
                  )}
                >
                  <CellValue value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
