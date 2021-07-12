<?php
$url = 'https://www.farsnews.ir/api/getmostvisited?Category=211&Subcategory=56&Count=100';
$handle = curl_init();
curl_setopt($handle, CURLOPT_URL, $url);
$data = curl_exec($handle);
$statusCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);
curl_close($handle);
if($statusCode == 200)
    return $data;
return null;


