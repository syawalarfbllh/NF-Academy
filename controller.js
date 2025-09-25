function lihatData() {
  return data.map((item, index) => ({ no: index + 1, ...item }));
}

function tambahData(...items) {
  data.push(...items);
  renderTable();
}

function hapusData(index) {
  data.splice(index, 1);
  renderTable();
}

function updateData(index, newItem) {
  data[index] = newItem;
  renderTable();
}

function renderTable(filter = "") {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  lihatData()
    .filter(item =>
      item.nama.toLowerCase().includes(filter.toLowerCase()) ||
      item.email.toLowerCase().includes(filter.toLowerCase())
    )
    .map((item, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${item.no}</td>
        <td>${item.nama}</td>
        <td>${item.umur}</td>
        <td>${item.alamat}</td>
        <td>${item.email}</td>
        <td>
          <button class="edit-btn" onclick="editRow(${index})">Edit</button>
          <button class="delete-btn" onclick="hapusData(${index})">Hapus</button>
        </td>
      `;

      tbody.appendChild(row);
    });
}

function editRow(index) {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  lihatData().map((item, i) => {
    const row = document.createElement("tr");

    if (i === index) {
      row.innerHTML = `
        <td>${item.no}</td>
        <td><input type="text" id="editNama" value="${item.nama}"></td>
        <td><input type="number" id="editUmur" value="${item.umur}"></td>
        <td><input type="text" id="editAlamat" value="${item.alamat}"></td>
        <td><input type="email" id="editEmail" value="${item.email}"></td>
        <td>
          <button class="save-btn" onclick="saveEdit(${i})">Simpan</button>
          <button class="cancel-btn" onclick="renderTable()">Batal</button>
        </td>
      `;
    } else {
      row.innerHTML = `
        <td>${item.no}</td>
        <td>${item.nama}</td>
        <td>${item.umur}</td>
        <td>${item.alamat}</td>
        <td>${item.email}</td>
        <td>
          <button class="edit-btn" onclick="editRow(${i})">Edit</button>
          <button class="delete-btn" onclick="hapusData(${i})">Hapus</button>
        </td>
      `;
    }

    tbody.appendChild(row);
  });
}

function saveEdit(index) {
  const newItem = {
    nama: document.getElementById("editNama").value,
    umur: Number(document.getElementById("editUmur").value),
    alamat: document.getElementById("editAlamat").value,
    email: document.getElementById("editEmail").value,
  };
  updateData(index, newItem);
}
