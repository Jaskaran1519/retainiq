"use client";
import { motion, Reorder } from "framer-motion";
import { useState, ChangeEvent } from "react";
import Delete from "./DeleteRow";
import DeleteCol from "./DeleteCol";
import Filter from "./Filter";
import { Plus } from "lucide-react";

type Variant = {
  url: string;
  name: string;
} | null;

interface RowData {
  id: number;
  variants: Variant[];
}

const ProductGrid = () => {
  const [rows, setRows] = useState<RowData[]>([{ id: 1, variants: [null] }]);

  const addRow = () => {
    const newRowId = rows.length + 1;
    const columnCount = rows[0]?.variants.length || 1;
    setRows([
      ...rows,
      { id: newRowId, variants: Array(columnCount).fill(null) },
    ]);
  };

  const addVariantColumn = () => {
    setRows(rows.map((row) => ({ ...row, variants: [...row.variants, null] })));
  };

  const handleImageUpload = (
    rowIndex: number,
    variantIndex: number,
    image: File
  ) => {
    setRows(
      rows.map((row, i) =>
        i === rowIndex
          ? {
              ...row,
              variants: row.variants.map((v, j) =>
                j === variantIndex
                  ? { url: URL.createObjectURL(image), name: image.name }
                  : v
              ),
            }
          : row
      )
    );
  };

  const handleDeleteRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleDeleteColumn = (columnIndex: number) => {
    setRows(
      rows.map((row) => ({
        ...row,
        variants: row.variants.filter((_, i) => i !== columnIndex),
      }))
    );
  };

  const renderVariantCell = (
    variant: Variant,
    rowIndex: number,
    variantIndex: number
  ) => (
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
        <div className="relative">
          <input
            type="file"
            className="w-44 h-44 opacity-0 rounded-xl border overflow-hidden"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleImageUpload(rowIndex, variantIndex, e.target.files?.[0]!)
            }
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            Drag <br /> or <br /> upload
          </h1>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-[90%] min-h-3/4 p-0 border bg-[#fbfbfd] rounded-xl mx-auto overflow-x-auto hide-scrollbar">
      <div className="min-w-max">
        {rows.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <button
              onClick={addRow}
              className="p-4 bg-gray-900 text-white rounded-lg"
            >
              Create New Row
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center bg-gray-50 mt-10 text-gray-500 font-semibold">
              <div className="sticky left-0 bg-gray-50 z-10 w-44 h-16 flex justify-center items-center">
                Row
              </div>
              <div className="sticky left-44 bg-gray-50 z-10 w-[30vw] h-16 flex items-center justify-center">
                Product Filter
              </div>
              <div className="flex gap-10 ml-20">
                {rows[0].variants.map((_, variantIndex) => (
                  <div
                    key={variantIndex}
                    className="flex items-center justify-between h-16 w-44 pl-2"
                  >
                    {variantIndex === 0
                      ? "Primary Variant"
                      : `Variant ${variantIndex + 1}`}
                    <DeleteCol
                      onDelete={() => handleDeleteColumn(variantIndex)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <Reorder.Group
              as="div"
              axis="y"
              onReorder={setRows}
              values={rows}
              className=""
            >
              {rows.map((row, rowIndex) => (
                <Reorder.Item key={row.id} value={row}>
                  <div
                    className="flex items-center mb-5"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto 1fr",
                    }}
                  >
                    <div className="sticky left-0 bg-[#fbfbfd] z-10 w-44 h-44">
                      <div className="p-4 text-3xl flex flex-col justify-center items-center gap-y-5">
                        {rowIndex + 1}
                        <Delete onDelete={() => handleDeleteRow(rowIndex)} />
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
                          {renderVariantCell(variant, rowIndex, variantIndex)}
                        </div>
                      ))}
                      <button onClick={addVariantColumn} className="p-2  mr-5">
                        <Plus />
                      </button>
                    </div>
                  </div>
                </Reorder.Item>
              ))}
            </Reorder.Group>

            <div className="h-16 w-full"></div>
            <div className="sticky bottom-0 left-0   z-10 w-44 h-16 flex items-center justify-center">
              <button
                onClick={addRow}
                className="p-2 border bg-white rounded-lg"
              >
                <Plus />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
