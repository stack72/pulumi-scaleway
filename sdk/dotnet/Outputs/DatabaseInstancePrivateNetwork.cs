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
    public sealed class DatabaseInstancePrivateNetwork
    {
        /// <summary>
        /// The ID of the endpoint of the private network.
        /// </summary>
        public readonly string? EndpointId;
        /// <summary>
        /// Name of the endpoint.
        /// </summary>
        public readonly string? Hostname;
        /// <summary>
        /// IP of the endpoint.
        /// </summary>
        public readonly string? Ip;
        public readonly string IpNet;
        /// <summary>
        /// The name of the Database Instance.
        /// </summary>
        public readonly string? Name;
        public readonly string PnId;
        /// <summary>
        /// Port of the endpoint.
        /// </summary>
        public readonly int? Port;
        public readonly string? Zone;

        [OutputConstructor]
        private DatabaseInstancePrivateNetwork(
            string? endpointId,

            string? hostname,

            string? ip,

            string ipNet,

            string? name,

            string pnId,

            int? port,

            string? zone)
        {
            EndpointId = endpointId;
            Hostname = hostname;
            Ip = ip;
            IpNet = ipNet;
            Name = name;
            PnId = pnId;
            Port = port;
            Zone = zone;
        }
    }
}
