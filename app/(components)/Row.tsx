import { motion } from "framer-motion";
import { Disc2, Plus } from "lucide-react";
import { FC } from "react";
import Delete from "./DeleteRow";
import Filter from "./Filter";

type Variant = {
  url: string;
  name: string;
} | null;

interface RowProps {
  rowIndex: number;
  row: { variants: Variant[] };
  onDeleteRow: (index: number) => void;
  onImageUpload: (rowIndex: number, variantIndex: number, image: File) => void;
  onAddVariantColumn: () => void;
  onDeleteColumn: (columnIndex: number) => void;
}

const Row: FC<RowProps> = ({
  rowIndex,
  row,
  onDeleteRow,
  onImageUpload,
  onAddVariantColumn,
  onDeleteColumn,
}) => {
  const renderVariantCell = (variant: Variant, variantIndex: number) => (
    <div className="p-2 border-gray-300 border-[2px] border-dotted rounded-md w-44 h-44 flex flex-col items-center overflow-hidden">
      {variant ? (
        <div className="flex flex-col items-center w-44 h-44 overflow-hidden">
          <img
            src={variant.url}
            alt={`Variant ${variantIndex + 1}`}
            className="w-32 h-32 object-cover"
          />
          <p className="text-center text-xs truncate w-full mt-2">
            {variant.name}
          </p>
        </div>
      ) : (
        <div className="relative ">
          <input
            type="file"
            className="w-44 h-44 opacity-0 rounded-xl  border overflow-hidden "
            onChange={(e) =>
              onImageUpload(rowIndex, variantIndex, e.target.files?.[0]!)
            }
          />
          <h1 className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            Drag <br /> or <br /> upload
          </h1>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      layout
      className="flex items-center my-5"
      style={{ display: "grid", gridTemplateColumns: "auto auto 1fr" }}
    >
      <div className="sticky left-0 bg-gray-50 z-10 w-44 h-44">
        <div className="p-4 text-3xl flex flex-col justify-center items-center gap-y-5">
          {rowIndex + 1}
          <Disc2 />
          <Delete onDelete={() => onDeleteRow(rowIndex)} />
        </div>
      </div>
      <div className="sticky left-44 bg-white z-10 rounded-xl w-[30vw]">
        <div className="h-44 border flex items-center justify-center">
          <Filter />
        </div>
      </div>
      <div className="flex gap-10 overflow-x-auto ml-20">
        {row.variants.map((variant, variantIndex) => (
          <div key={variantIndex}>
            {renderVariantCell(variant, variantIndex)}
          </div>
        ))}
        <button onClick={onAddVariantColumn} className="p-2">
          <Plus />
        </button>
      </div>
    </motion.div>
  );
};

export default Row;
