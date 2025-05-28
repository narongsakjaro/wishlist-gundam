const InputForm = ({
  name,
  price,
  ref,
  onEnterName,
  onEnterPrice,
  onEnterRef,
  onInsertImage,
  onAddItem,
  onExportData,
}) => {
  return (
    <form className="flex flex-col gap-5 p-6">
      <input
        className="block w-full"
        type="text"
        placeholder="NAME"
        value={name}
        onChange={onEnterName}
        required
      />
      <input
        className="block w-full"
        type="text"
        placeholder="PRICE"
        value={price}
        onChange={onEnterPrice}
        required
      />
      <input
        className="block w-full"
        type="text"
        placeholder="URL"
        value={ref}
        onChange={onEnterRef}
      />
      <input className="block w-full" type="file" onChange={onInsertImage} />
      <div className="flex gap-3">
        <button type="button" className="flex-auto" onClick={onAddItem}>
          SUBMIT
        </button>
        <button type="button" className="flex-auto" onClick={onExportData}>
          DELETE
        </button>
      </div>
    </form>
  );
};

export default InputForm;
