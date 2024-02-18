#!/bin/bash
echo "Running bash script"
#whoami
#cat /etc/os-release
RewriteEngine on
RewriteCond %{HTTP_HOST} ^example.com [NC,OR]
RewriteCond %{HTTP_HOST} ^www.example.com [NC]
RewriteRule ^(.*)$ http://your-vercel-deployment-url/$1
