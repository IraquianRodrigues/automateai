$root = "c:\Users\iraquian\automateai-main"
$files = Get-ChildItem -Path $root -Recurse -File -Include "*.tsx", "*.ts", "*.css", "*.json", "*.js"

foreach ($file in $files) {
    if ($file.FullName -match "node_modules" -or $file.FullName -match "\.next" -or $file.FullName -match "\.git") {
        continue
    }

    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($null -eq $content) { continue }

    # Regex for conflict markers
    # (?s) enables single-line mode (dot matches newline)
    # (?m) enables multi-line mode (^ and $ match start/end of line)
    # We use \r?\n to handle line endings.
    
    # Pattern explanation:
    # ^<<<<<<< HEAD\r?\n    : Start of conflict block
    # (.*?)                 : Capture HEAD content (group 1)
    # ^=======\r?\n         : Separator
    # .*?                   : Ignore incoming content
    # ^>>>>>>> .*?(\r?\n|$) : End marker
    
    $pattern = "(?ms)^<<<<<<< HEAD\r?\n(.*?)^=======\r?\n.*?^>>>>>>> .*?(\r?\n|$)"
    
    if ($content -match $pattern) {
        Write-Host "Resolving: $($file.FullName)"
        $newContent = [regex]::new($pattern).Replace($content, '$1')
        Set-Content -Path $file.FullName -Value $newContent -NoNewline -Encoding UTF8
    }
}
Write-Host "Done."
