using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LandMineSearchClient.Startup))]
namespace LandMineSearchClient
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
