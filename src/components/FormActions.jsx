const FormActions = ({
  onSubmit,
  onDelete,
  onCancel,
  submitLabel = "Submit",
  deleteLabel = "Delete",
  cancelLabel = "Cancel",
}) => {
  return (
    <div className="flex gap-3">
      {onSubmit && (
        <button className="flex-auto" onClick={onSubmit}>
          {submitLabel}
        </button>
      )}
      {onDelete && (
        <button className="flex-auto" onClick={onDelete}>
          {deleteLabel}
        </button>
      )}
      {onCancel && (
        <button className="flex-auto" onClick={onCancel}>
          {cancelLabel}
        </button>
      )}
    </div>
  );
};

export default FormActions;
