---
title: Setup
permalink: /setup/
---

* [Windows Package Manager (winget)](https://learn.microsoft.com/en-us/windows/package-manager/)

## 7-zip

* [7-zip](https://www.7-zip.org/)

```shell
winget install 7zip.7zip
```

## Astral UV (Python)

* [Astral UV](https://docs.astral.sh/uv/)

```shell
winget install astral-sh.uv
```

```shell
irm https://astral.sh/uv/install.ps1 | iex
```

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## AWS CLI & Session Manager

* [AWS CLI](https://aws.amazon.com/cli)
* [AWS Session Manager Plugion](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html).

```shell
winget install Amazon.AWSCLI
winget install Amazon.SessionManagerPlugin
```

## Bitwarden

* [Bitwarden](https://bitwarden.com/)
* [Bitwarden Web Vault](https://vault.bitwarden.com/)

```shell
winget install Bitwarden.Bitwarden
winget install Bitwarden.CLI
```

## Cascadia Code

* [Download](https://github.com/microsoft/cascadia-code/releases)
* [Installing Cascadia Code](https://github.com/microsoft/cascadia-code/wiki/Installing-Cascadia-Code)

## Copilot CLI

* [Copilot CLI](https://github.com/features/copilot/cli)

```shell
winget install GitHub.Copilot
```

```shell
curl -fsSL https://gh.io/copilot-install | bash
```

## Coreutils for Windows

* [Coreutils for Windows](https://github.com/microsoft/coreutils)

```shell
winget install Microsoft.Coreutils
```

## Cryptomator

* [Cryptomator](https://cryptomator.org/)
* [Cryptomator GitHub](https://github.com/cryptomator/cryptomator)

```shell
winget install Cryptomator.Cryptomator
```

## DaVinci Resolve

* [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve)

## DBeaver

* [DBeaver](https://dbeaver.io/)
* [DBeaver GitHub](https://github.com/dbeaver/dbeaver)

```shell
winget install DBeaver.DBeaver.Community
```

## Discord

* [Discord](https://discord.com/)

```shell
winget install Discord.Discord
```

## Docker

### Docker Desktop

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [Docker Desktop Docs](https://docs.docker.com/desktop/)

```shell
winget install Docker.DockerDesktop
```

### Docker Engine

* [Docker Engine Docs](https://docs.docker.com/engine/)
* [Docker Engine Install](https://docs.docker.com/engine/install)

## Edit CLI Editor

* [Edit CLI Editor](https://learn.microsoft.com/en-us/windows/edit/)

```shell
winget install Microsoft.Edit
```

## Git

* [Git for Windows](https://git-scm.com/)

```shell
winget install Git.Git
```

## GitHub CLI

* [GitHub CLI](https://cli.github.com/)

```shell
winget install GitHub.cli
```

## Google Chrome

* [Google Chrome](https://www.google.com/chrome/)

```shell
winget install Google.Chrome
```

## Helm CLI

* [Helm](https://helm.sh/)

```shell
winget install Helm.Helm
```

## Irfanview & Plugins

* [Irfanview](https://www.irfanview.com/)

```shell
winget install IrfanSkiljan.IrfanView
winget install IrfanSkiljan.IrfanView.PlugIns
```

## JetBrains

* [JetBrains IntelliJ IDEA](https://www.jetbrains.com/idea/)
* [JetBrains PyCharm](https://www.jetbrains.com/pycharm/)
* [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

```shell
winget install JetBrains.IntelliJIDEA
winget install JetBrains.PyCharm
winget install JetBrains.Toolbox
```

## Kubernetes CLI (Kubectl)

* [Kubernetes Tools](https://kubernetes.io/docs/tasks/tools/)
* [Install and Set Up kubectl on Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)

```shell
winget install Kubernetes.kubectl
```

## Logi Options+

* [Logi Options+](https://www.logitech.com/en-us/software/logi-options-plus)

```shell
winget install Logitech.OptionsPlus
```

### Alternative: OpenLogi

* [OpenLogi](https://openlogi.org/)
  * [Install](https://openlogi.org/en#install)
  * [Download/Linux](https://openlogi.org/download/linux)
  * [Download/Windows](https://openlogi.org/download/windows)

## NVM (NodeJS)

* [Download Nvm for Windows](https://github.com/coreybutler/nvm-windows/releases)
* [NodeJS Command-line API](https://nodejs.org/dist/latest-v20.x/docs/api/cli.html)

```shell
winget install CoreyButler.NVMforWindows
nvm install lts
nvm use lts
```

## Notepad++

[Notepad++](https://notepad-plus-plus.org/)

```shell
winget install Notepad++.Notepad++
```

## Postman

* [Postman](https://www.postman.com/)
* [Download and Install Postman](https://www.postman.com/downloads/)

```shell
winget install Postman.Postman
```

## PowerShell

[Download](https://github.com/PowerShell/PowerShell/releases)

```shell
winget install Microsoft.PowerShell
```

### PowerToys

* [Microsoft PowerToys](https://learn.microsoft.com/en-us/windows/powertoys/)

```shell
winget install Microsoft.PowerToys
```

### OhMyPosh

* [Install OhMyPosh](https://ohmyposh.dev/docs/installation/windows)

```shell
winget install JanDeDobbeleer.OhMyPosh
```

### Posh-Git

* [GitHub](https://github.com/dahlbyk/posh-git)

```shell
Install-Module posh-git
```

## PuTTY

* [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/)

```shell
winget install PuTTY.PuTTY
```

## SDKMan for PowerShell

* [HewlettPackard/posh-sdk](https://github.com/HewlettPackard/posh-sdk)
* Clone of [SDKMan CLI](https://sdkman.io/)

```shell
irm https://raw.githubusercontent.com/gomorpheus/posh-sdk/master/GetPoshSdkMan.ps1 | iex
```

__Add to $PROFILE:__

```shell
Import-Module posh-sdk
```

## Visual Studio Code

* [VSCode](https://code.visualstudio.com/)
* [VSCode GitHub](https://github.com/microsoft/vscode)
* [VSCode.dev](https://vscode.dev/)

```shell
winget install Microsoft.VisualStudioCode
```

## VLC Player

* [VLC Player](https://www.videolan.org/vlc/)

```shell
winget install VideoLAN.VLC
```

## Windows Terminal

* [Windows Terminal](https://github.com/microsoft/terminal)
* [Download Terminal (Windows Store)](https://aka.ms/terminal)

```shell
winget install Microsoft.WindowsTerminal
```

## Yubico Authenticator

* [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator)

```shell
winget install Yubico.Authenticator
```

## Windows & Office

* [Microsoft Activation Scripts (MAS)](https://massgrave.dev/)
* [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/)

```shell
irm https://get.activated.win | iex
```

By default, Windows requires Administrator rights to create symbolic links. This can be changed in the Local Security Policy.

* Open the Local Security Policy management console as Administrator (`%windir%\system32\secpol.msc /s`)
* Find the following path in the heirarchy on the left:
  `Security Settings > Local Policies > User Rights Assignment`
* In the policy window on the right, find "Create Symbolic Links".
* Double-click the policy. Click "Add User or Group". Add your user.
