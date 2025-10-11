<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Penilaian Ujian</title>

    <!-- Link Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-lg border-0 rounded-4">
                    <div class="card-body p-4">
                        <h3 class="text-center mb-4 text-primary">🧾 Form Penilaian Ujian</h3>

                        <!-- FORM INPUT -->
                        <form method="POST" action="">
                            <div class="mb-3">
                                <label class="form-label">Nama</label>
                                <input type="text" name="nama" class="form-control" placeholder="Masukkan nama lengkap" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" name="email" class="form-control" placeholder="Masukkan email aktif" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Nilai Ujian</label>
                                <input type="number" name="nilai" class="form-control" placeholder="Masukkan nilai ujian (0-100)" min="0" max="100" required>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-lg">Kirim</button>
                            </div>
                        </form>

                        <hr class="my-4">

                        <!-- HASIL OUTPUT -->
                        <?php
                        if ($_SERVER["REQUEST_METHOD"] == "POST") {
                            $nama = htmlspecialchars($_POST['nama']);
                            $email = htmlspecialchars($_POST['email']);
                            $nilai = $_POST['nilai'];

                            echo '<div class="alert alert-info">';
                            echo "<h5 class='text-center mb-3'>📋 Hasil Penilaian</h5>";
                            echo "<p><strong>Nama:</strong> $nama</p>";
                            echo "<p><strong>Email:</strong> $email</p>";
                            echo "<p><strong>Nilai Ujian:</strong> $nilai</p>";

                            // Struktur kendali
                            if ($nilai > 70) {
                                echo "<div class='alert alert-success text-center fw-bold rounded-3'>Lulus 🎉</div>";
                            } else {
                                echo "<div class='alert alert-warning text-center fw-bold rounded-3'>Remedial ⚠️</div>";
                            }

                            echo '</div>';
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
