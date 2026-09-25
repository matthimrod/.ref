---
title: Setup
permalink: /setup/
---

* [Windows Package Manager (winget)](https://learn.microsoft.com/en-us/windows/package-manager/)
* [Mac Homebrew Package Manager (brew)](https://brew.sh/)

## 7-zip

* [7-zip](https://www.7-zip.org/)

```powershell
winget install 7zip.7zip
```

```zsh
brew install sevenzip
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

```zsh
brew install uv
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

```zsh
brew install --cask bitwarden
brew install bitwarden-cli
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

```zsh
brew install --cask copilot-cli
```

## Coreutils for Windows

* [Coreutils for Windows](https://github.com/microsoft/coreutils)

```shell
winget install Microsoft.Coreutils
```

```zsh
brew install coreutils
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

```zsh
brew install --cask dbeaver-community
```

## Discord

* [Discord](https://discord.com/)

```shell
winget install Discord.Discord
```

```zsh
brew install --cask discord
```

## Docker

### Docker Desktop

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [Docker Desktop Docs](https://docs.docker.com/desktop/)

```shell
winget install Docker.DockerDesktop
```

```zsh
brew install --cask docker-desktop
```

### Docker Engine

* [Docker Engine Docs](https://docs.docker.com/engine/)
* [Docker Engine Install](https://docs.docker.com/engine/install)

```zsh
brew install docker
```

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

```zsh
brew install git
```

## GitHub CLI

* [GitHub CLI](https://cli.github.com/)

```shell
winget install GitHub.cli
```

```zsh
brew install gh
```

## Google Chrome

* [Google Chrome](https://www.google.com/chrome/)

```shell
winget install Google.Chrome
```

```zsh
brew install --cask google-chrome
```

### Chrome/Edge Extensions

* [Bitwareden](https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb)
* [Dark Reader](https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)
* [Markdown Reader](https://chromewebstore.google.com/detail/markdown-reader/medapdbncneneejhbgcjceippjlfkmkg)

## Helm CLI

* [Helm](https://helm.sh/)

```shell
winget install Helm.Helm
```

```zsh
brew install helm
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

```zsh
brew install --cask intellij-idea
brew install --cask pycharm
brew install --cask jetbrains-toolbox
```

## Kubernetes CLI (Kubectl)

* [Kubernetes Tools](https://kubernetes.io/docs/tasks/tools/)
* [Install and Set Up kubectl on Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)

```shell
winget install Kubernetes.kubectl
```

```zsh
brew install kubernetes-cli
```

## Logi Options+

* [Logi Options+](https://www.logitech.com/en-us/software/logi-options-plus)

```shell
winget install Logitech.OptionsPlus
```

```zsh
brew install --cask logi-options+
```

### Alternative: OpenLogi

* [OpenLogi](https://openlogi.org/)
  * [Install](https://openlogi.org/en#install)
  * [Download/Linux](https://openlogi.org/download/linux)
  * [Download/Windows](https://openlogi.org/download/windows)

```zsh
brew install --cask openlogi
```

## NVM (NodeJS)

* [Download Nvm for Windows](https://github.com/coreybutler/nvm-windows/releases)
* [NodeJS Command-line API](https://nodejs.org/dist/latest-v20.x/docs/api/cli.html)

```shell
winget install CoreyButler.NVMforWindows
nvm install lts
nvm use lts
```

```zsh
brew install nvm
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

```zsh
brew install --cask postman
```

## PowerShell

[Download](https://github.com/PowerShell/PowerShell/releases)

```shell
winget install Microsoft.PowerShell
```

```zsh
brew install powershell
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

```zsh
brew install oh-my-posh
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

```zsh
brew install putty
```

## SDKMAN!

* [SDKMAN!](https://sdkman.io/)

```zsh
curl -s "https://get.sdkman.io" | zsh
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

```zsh
brew install --cask visual-studio-code
```

## VLC Player

* [VLC Player](https://www.videolan.org/vlc/)

```shell
winget install VideoLAN.VLC
```

```zsh
brew install --cask vlc
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

```zsh
brew install --cask yubico-authenticator
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
