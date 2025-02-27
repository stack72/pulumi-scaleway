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
    public sealed class DomainRecordWeighted
    {
        /// <summary>
        /// The weighted IP
        /// </summary>
        public readonly string Ip;
        /// <summary>
        /// The weight of the IP as an integer UInt32.
        /// </summary>
        public readonly int Weight;

        [OutputConstructor]
        private DomainRecordWeighted(
            string ip,

            int weight)
        {
            Ip = ip;
            Weight = weight;
        }
    }
}
