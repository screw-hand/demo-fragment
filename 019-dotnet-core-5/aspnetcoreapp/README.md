ASP.NET Core 入门 | Microsoft Learn
https://learn.microsoft.com/zh-cn/aspnet/core/getting-started/?view=aspnetcore-5.0&tabs=macos

```bash
> $ $DOTNET_ROOT/dotnet new webapp -o aspnetcoreapp                                                                                                                 ⬡ 14.19.3 [±main ●]
Getting ready...
The template "ASP.NET Core Web App" was created successfully.
This template contains technologies from parties other than Microsoft, see https://aka.ms/aspnetcore/5.0-third-party-notices for details.

Processing post-creation actions...
Running 'dotnet restore' on aspnetcoreapp/aspnetcoreapp.csproj...
  Determining projects to restore...
  Restored /Users/wu/Documents/code/demo-fragment/019-dotnet-core-5/aspnetcoreapp/aspnetcoreapp.csproj (in 171 ms).
Restore succeeded.

wu@Coder-Studio ~/Documents/code/demo-fragment/019-dotnet-core-5/aspnetcoreapp                                                                                               [15:13:09]
> $ open aspnetcoreapp.csproj

wu@Coder-Studio ~/Documents/code/demo-fragment/019-dotnet-core-5/aspnetcoreapp                                                                                               [15:15:31]
> $ $DOTNET_ROOT/dotnet dev-certs https --trust                                                                                                                   ⬡ 14.19.3 [±main ●●▴]
Trusting the HTTPS development certificate was requested. If the certificate is not already trusted we will run the following command:
'sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain <<certificate>>'
This command might prompt you for your password to install the certificate on the system keychain.
Password:
A valid HTTPS certificate is already present.

wu@Coder-Studio ~/Documents/code/demo-fragment/019-dotnet-core-5/aspnetcoreapp 
dotnet watch run

The ASP.NET Core developer certificate is in an invalid state. To fix this issue, run 'dotnet dev-certs https --clean' and 'dotnet dev-certs https' to remove all existing ASP.NET Core development certificates and create a new untrusted developer certificate. On macOS or Windows, use 'dotnet dev-certs https --trust' to trust the new certificate.
dotnet watch 🚀 Started
Building...
/usr/local/share/dotnet/sdk/7.0.202/Sdks/Microsoft.NET.Sdk/targets/Microsoft.NET.EolTargetFrameworks.targets(28,5): warning NETSDK1138: The target framework 'net5.0' is out of support and will not receive security updates in the future. Please refer to https://aka.ms/dotnet-core-support for more information about the support policy. [/Users/wu/Documents/code/demo-fragment/019-dotnet-core-5/aspnetcoreapp/aspnetcoreapp.csproj]
/usr/local/share/dotnet/sdk/7.0.202/Sdks/Microsoft.NET.Sdk/targets/Microsoft.NET.EolTargetFrameworks.targets(28,5): warning NETSDK1138: The target framework 'net5.0' is out of support and will not receive security updates in the future. Please refer to https://aka.ms/dotnet-core-support for more information about the support policy. [/Users/wu/Documents/code/demo-fragment/019-dotnet-core-5/aspnetcoreapp/aspnetcoreapp.csproj]
/usr/local/share/dotnet/sdk/7.0.202/Sdks/Microsoft.NET.Sdk/targets/Microsoft.NET.EolTargetFrameworks.targets(28,5): warning NETSDK1138: The target framework 'net5.0' is out of support and will not receive security updates in the future. Please refer to https://aka.ms/dotnet-core-support for more information about the support policy. [/Users/wu/Documents/code/demo-fragment/019-dotnet-core-5/aspnetcoreapp/aspnetcoreapp.csproj]
warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[35]
      No XML encryptor configured. Key {d335934c-d1de-4e85-b931-df2a9feb9820} may be persisted to storage in unencrypted form.
info: Microsoft.Hosting.Lifetime[0]
      Now listening on: https://localhost:5001
info: Microsoft.Hosting.Lifetime[0]
      Now listening on: http://localhost:5000
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: /Users/wu/Documents/code/demo-fragment/019-dotnet-core-5/aspnetcoreapp
```