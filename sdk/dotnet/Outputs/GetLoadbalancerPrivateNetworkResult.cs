// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Scaleway.Outputs
{

    [OutputType]
    public sealed class GetLoadbalancerPrivateNetworkResult
    {
        public readonly bool DhcpConfig;
        public readonly string PrivateNetworkId;
        public readonly ImmutableArray<string> StaticConfigs;
        public readonly string Status;
        /// <summary>
        /// `region`) The region in which the LB exists.
        /// </summary>
        public readonly string Zone;

        [OutputConstructor]
        private GetLoadbalancerPrivateNetworkResult(
            bool dhcpConfig,

            string privateNetworkId,

            ImmutableArray<string> staticConfigs,

            string status,

            string zone)
        {
            DhcpConfig = dhcpConfig;
            PrivateNetworkId = privateNetworkId;
            StaticConfigs = staticConfigs;
            Status = status;
            Zone = zone;
        }
    }
}
