---
title: PowerShell
permalink: /powershell/
classes: wide
---

# PowerShell Commands for Wi-Fi and WLAN (plus a bunch of netsh too!)

Below is a **clean**, **technician-focused list** of the Windows **PowerShell commands used for Wi-Fi and WLAN troubleshooting**, organized by function. This aligns well with broadband-tech workflows, capture analysis, and WLAN Operations fundamentals.

## 1\. Let’s Start with Discovering Wi-Fi Interfaces & Drivers

### Get Wi-Fi NICs & Driver Info

```PowerShell
Get-NetAdapter -Physical | Where-Object {$_.Status -eq "Up"}
Get-NetAdapter -Name "Wi-Fi" | Format-List *
Get-NetAdapterAdvancedProperty -Name "Wi-Fi"
Get-NetAdapterHardwareInfo -Name "Wi-Fi"
Get-NetAdapterStatistics -Name "Wi-Fi"
Get-NetAdapterPowerManagement -Name "Wi-Fi"
```

### Driver Version / Capabilities

```PowerShell
(Get-NetAdapter -Name "Wi-Fi").DriverInformation
```

## 2\. Performing Scans for Nearby Wi-Fi Networks

PowerShell has no direct native Wi-Fi scan cmdlet. You use **netsh** from inside PowerShell. Keep in mind you can also execute these netsh commands in standard Windows Command/Terminal:

### Scan

```PowerShell
netsh wlan show networks mode=bssid
```

### List Saved Profiles

```PowerShell
netsh wlan show profiles
```

## 3\. Connect / Disconnect / Manage Wi-Fi Profiles in Windows

### Remove a Saved Profile

```PowerShell
netsh wlan delete profile name="SSID-Name"
```

### Export Profiles (for backup or cloning configs)

```PowerShell
netsh wlan export profile key=clear folder="C:\wifi"
```

### Import Profile

```PowerShell
netsh wlan add profile filename="C:\wifi\mywifi.xml"
```

### Connect to a Network

```PowerShell
netsh wlan connect name="SSID-Name"
```

### Disconnect

```PowerShell
netsh wlan disconnect
```

## 4\. Wi-Fi Radio Control / Interface Control

### View WLAN Interface State

```PowerShell
netsh wlan show interfaces
```

### Enable / Disable Wi-Fi Interface

```PowerShell
Enable-NetAdapter -Name "Wi-Fi"
Disable-NetAdapter -Name "Wi-Fi"
```

### Disable Wi-Fi Radio (Airplane-style troubleshooting)

```PowerShell
netsh radio set wlan off
netsh radio set wlan on
```

## 5\. Advanced WLAN Diagnostics

### Show WLAN Report (Generates HTML Diagnostic Report)

```PowerShell
netsh wlan show wlanreport
```

This creates a report found at the following location that you should open in a web browser tab:  
`C:\ProgramData\Microsoft\Windows\WlanReport\wlan-report-latest.html`  
Fantastic for troubleshooting roaming, authentication failures, disconnects.

### Show WLAN AutoConfig

```PowerShell
netsh wlan show autoconfig
```

### Show Drivers and Capabilities

```PowerShell
netsh wlan show drivers
```

This shows:

- Supported 802.11 standards (a/b/g/n/ac/ax)
- Radio types
- Channel widths
- Authentication/cipher suites
- Hosted network support

## 6\. Packet Capture (Built-In ETW Wi-Fi Capture)

*(This is extremely useful with Wireshark ETL imports.)*

### Start Wi-Fi Packet Capture

```PowerShell
netsh trace start capture=yes tracefile=c:\temp\wifi.etl scenario=WLAN
```

### Stop Capture

```PowerShell
netsh trace stop
```

### Newer PS-Native ETW Cmdlets (Windows 10+)

```PowerShell
Get-NetEventSession
New-NetEventSession -Name WifiCapture -CaptureMode SaveToFile -LocalFilePath c:\temp
Add-NetEventProvider -Name Microsoft-Windows-WLAN-AutoConfig -SessionName WifiCapture
Start-NetEventSession -Name WifiCapture
Stop-NetEventSession -Name WifiCapture
```

## 7\. IP, DNS, DHCP Commands Relevant to WLAN

These aren’t Wi-Fi-specific but used **constantly in WLAN troubleshooting**.

### Show IP Settings

```PowerShell
Get-NetIPConfiguration
```

### Release / Renew DHCP

```PowerShell
ipconfig /release
ipconfig /renew
```

### Flush DNS Cache

```PowerShell
Clear-DnsClientCache
```

### Show DNS Cache

```PowerShell
Get-DnsClientCache
```

## 8\. Wi-Fi Profiles, Authentication, 802.1X

### Show 802.1X Auth Config

```PowerShell
netsh lan show profiles
```

### Show RADIUS / 802.1X Settings

```PowerShell
netsh lan show interfaces
```

(Useful in enterprise WLANOps scenarios)

## 9\. Network Reset / WLAN Repair Commands

### Reset TCP/IP Stack

```PowerShell
netsh int ip reset
```

### Reset Winsock

```PowerShell
netsh winsock reset
```

### Reset WLAN Profiles

```PowerShell
netsh wlan delete profile name=*
```

## 11\. Wi-Fi Power & Roaming Controls

### Set Power Level

```PowerShell
Set-NetAdapterAdvancedProperty -Name "Wi-Fi" -DisplayName "Transmit Power" -DisplayValue "Highest"
```

### Set Roaming Aggressiveness

```PowerShell
Set-NetAdapterAdvancedProperty -Name "Wi-Fi" -DisplayName "Roaming Aggressiveness" -DisplayValue "Medium"
```

## Some Bonus Things

### Check 6 GHz (Wi-Fi 6E) support

```PowerShell
netsh wlan show drivers | findstr "6GHz"
```

### Check supported MCS / spatial streams

Windows hides this, but you get hints from:

```PowerShell
netsh wlan show interfaces
```