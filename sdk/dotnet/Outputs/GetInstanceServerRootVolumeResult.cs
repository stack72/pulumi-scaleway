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
    public sealed class GetInstanceServerRootVolumeResult
    {
        public readonly bool Boot;
        /// <summary>
        /// Forces deletion of the root volume on instance termination.
        /// </summary>
        public readonly bool DeleteOnTermination;
        /// <summary>
        /// Size of the root volume in gigabytes.
        /// </summary>
        public readonly int SizeInGb;
        /// <summary>
        /// The volume ID of the root volume of the server.
        /// </summary>
        public readonly string VolumeId;

        [OutputConstructor]
        private GetInstanceServerRootVolumeResult(
            bool boot,

            bool deleteOnTermination,

            int sizeInGb,

            string volumeId)
        {
            Boot = boot;
            DeleteOnTermination = deleteOnTermination;
            SizeInGb = sizeInGb;
            VolumeId = volumeId;
        }
    }
}
