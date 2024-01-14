<?php

// CORSヘッダーの設定
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// preflightリクエストに対する応答
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
$jsonFilePath = __DIR__ . '/../public/data/members.json';
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    // データをdata.jsonファイルに書き込む
    file_put_contents($jsonFilePath, json_encode($data));
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid data']);
}
