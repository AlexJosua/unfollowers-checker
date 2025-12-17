const FileUpload = ({ label, onfileRead }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validasi
    if (!file.name.endsWith(".html")) {
      alert("Please Upload an HTML file");
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const htmlString = event.target.result;
      console.log("File read success:", file.name);
      console.log("File length:", event.target.result.length);
      onfileRead(htmlString);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <label>{label}</label>
      <br />
      <input type="file" accept=".html" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
