// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi.Utilities;

namespace Pulumi.Scaleway
{
    public static class GetDatabaseInstance
    {
        /// <summary>
        /// Gets information about a RDB instance.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Scaleway = Pulumi.Scaleway;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var myInstance = Output.Create(Scaleway.GetDatabaseInstance.InvokeAsync(new Scaleway.GetDatabaseInstanceArgs
        ///         {
        ///             InstanceId = "11111111-1111-1111-1111-111111111111",
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetDatabaseInstanceResult> InvokeAsync(GetDatabaseInstanceArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDatabaseInstanceResult>("scaleway:index/getDatabaseInstance:getDatabaseInstance", args ?? new GetDatabaseInstanceArgs(), options.WithVersion());

        /// <summary>
        /// Gets information about a RDB instance.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Scaleway = Pulumi.Scaleway;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var myInstance = Output.Create(Scaleway.GetDatabaseInstance.InvokeAsync(new Scaleway.GetDatabaseInstanceArgs
        ///         {
        ///             InstanceId = "11111111-1111-1111-1111-111111111111",
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Output<GetDatabaseInstanceResult> Invoke(GetDatabaseInstanceInvokeArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.Invoke<GetDatabaseInstanceResult>("scaleway:index/getDatabaseInstance:getDatabaseInstance", args ?? new GetDatabaseInstanceInvokeArgs(), options.WithVersion());
    }


    public sealed class GetDatabaseInstanceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The RDB instance ID.
        /// Only one of `name` and `instance_id` should be specified.
        /// </summary>
        [Input("instanceId")]
        public string? InstanceId { get; set; }

        /// <summary>
        /// The name of the RDB instance.
        /// Only one of `name` and `instance_id` should be specified.
        /// </summary>
        [Input("name")]
        public string? Name { get; set; }

        public GetDatabaseInstanceArgs()
        {
        }
    }

    public sealed class GetDatabaseInstanceInvokeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The RDB instance ID.
        /// Only one of `name` and `instance_id` should be specified.
        /// </summary>
        [Input("instanceId")]
        public Input<string>? InstanceId { get; set; }

        /// <summary>
        /// The name of the RDB instance.
        /// Only one of `name` and `instance_id` should be specified.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public GetDatabaseInstanceInvokeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDatabaseInstanceResult
    {
        public readonly int BackupScheduleFrequency;
        public readonly int BackupScheduleRetention;
        public readonly string Certificate;
        public readonly bool DisableBackup;
        public readonly string EndpointIp;
        public readonly int EndpointPort;
        public readonly string Engine;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string? InstanceId;
        public readonly bool IsHaCluster;
        public readonly ImmutableArray<Outputs.GetDatabaseInstanceLoadBalancerResult> LoadBalancers;
        public readonly string? Name;
        public readonly string NodeType;
        public readonly string OrganizationId;
        public readonly string Password;
        public readonly ImmutableArray<Outputs.GetDatabaseInstancePrivateNetworkResult> PrivateNetworks;
        public readonly string ProjectId;
        public readonly ImmutableArray<Outputs.GetDatabaseInstanceReadReplicaResult> ReadReplicas;
        public readonly string Region;
        public readonly ImmutableDictionary<string, string> Settings;
        public readonly ImmutableArray<string> Tags;
        public readonly string UserName;
        public readonly int VolumeSizeInGb;
        public readonly string VolumeType;

        [OutputConstructor]
        private GetDatabaseInstanceResult(
            int backupScheduleFrequency,

            int backupScheduleRetention,

            string certificate,

            bool disableBackup,

            string endpointIp,

            int endpointPort,

            string engine,

            string id,

            string? instanceId,

            bool isHaCluster,

            ImmutableArray<Outputs.GetDatabaseInstanceLoadBalancerResult> loadBalancers,

            string? name,

            string nodeType,

            string organizationId,

            string password,

            ImmutableArray<Outputs.GetDatabaseInstancePrivateNetworkResult> privateNetworks,

            string projectId,

            ImmutableArray<Outputs.GetDatabaseInstanceReadReplicaResult> readReplicas,

            string region,

            ImmutableDictionary<string, string> settings,

            ImmutableArray<string> tags,

            string userName,

            int volumeSizeInGb,

            string volumeType)
        {
            BackupScheduleFrequency = backupScheduleFrequency;
            BackupScheduleRetention = backupScheduleRetention;
            Certificate = certificate;
            DisableBackup = disableBackup;
            EndpointIp = endpointIp;
            EndpointPort = endpointPort;
            Engine = engine;
            Id = id;
            InstanceId = instanceId;
            IsHaCluster = isHaCluster;
            LoadBalancers = loadBalancers;
            Name = name;
            NodeType = nodeType;
            OrganizationId = organizationId;
            Password = password;
            PrivateNetworks = privateNetworks;
            ProjectId = projectId;
            ReadReplicas = readReplicas;
            Region = region;
            Settings = settings;
            Tags = tags;
            UserName = userName;
            VolumeSizeInGb = volumeSizeInGb;
            VolumeType = volumeType;
        }
    }
}
