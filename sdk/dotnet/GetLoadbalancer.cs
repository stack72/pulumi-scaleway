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
    public static class GetLoadbalancer
    {
        /// <summary>
        /// Gets information about a Load Balancer.
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
        ///         var byName = Output.Create(Scaleway.GetLoadbalancer.InvokeAsync(new Scaleway.GetLoadbalancerArgs
        ///         {
        ///             Name = "foobar",
        ///         }));
        ///         var byId = Output.Create(Scaleway.GetLoadbalancer.InvokeAsync(new Scaleway.GetLoadbalancerArgs
        ///         {
        ///             LbId = "11111111-1111-1111-1111-111111111111",
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetLoadbalancerResult> InvokeAsync(GetLoadbalancerArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetLoadbalancerResult>("scaleway:index/getLoadbalancer:getLoadbalancer", args ?? new GetLoadbalancerArgs(), options.WithVersion());

        /// <summary>
        /// Gets information about a Load Balancer.
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
        ///         var byName = Output.Create(Scaleway.GetLoadbalancer.InvokeAsync(new Scaleway.GetLoadbalancerArgs
        ///         {
        ///             Name = "foobar",
        ///         }));
        ///         var byId = Output.Create(Scaleway.GetLoadbalancer.InvokeAsync(new Scaleway.GetLoadbalancerArgs
        ///         {
        ///             LbId = "11111111-1111-1111-1111-111111111111",
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Output<GetLoadbalancerResult> Invoke(GetLoadbalancerInvokeArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.Invoke<GetLoadbalancerResult>("scaleway:index/getLoadbalancer:getLoadbalancer", args ?? new GetLoadbalancerInvokeArgs(), options.WithVersion());
    }


    public sealed class GetLoadbalancerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The ID.
        /// Only one of `ip_address` and `lb_id` should be specified.
        /// </summary>
        [Input("lbId")]
        public string? LbId { get; set; }

        /// <summary>
        /// The IP address.
        /// Only one of `name` and `lb_id` should be specified.
        /// </summary>
        [Input("name")]
        public string? Name { get; set; }

        [Input("releaseIp")]
        public bool? ReleaseIp { get; set; }

        /// <summary>
        /// `region`) The region in which the LB exists.
        /// </summary>
        [Input("zone")]
        public string? Zone { get; set; }

        public GetLoadbalancerArgs()
        {
        }
    }

    public sealed class GetLoadbalancerInvokeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The ID.
        /// Only one of `ip_address` and `lb_id` should be specified.
        /// </summary>
        [Input("lbId")]
        public Input<string>? LbId { get; set; }

        /// <summary>
        /// The IP address.
        /// Only one of `name` and `lb_id` should be specified.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("releaseIp")]
        public Input<bool>? ReleaseIp { get; set; }

        /// <summary>
        /// `region`) The region in which the LB exists.
        /// </summary>
        [Input("zone")]
        public Input<string>? Zone { get; set; }

        public GetLoadbalancerInvokeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetLoadbalancerResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The load-balancer public IP Address
        /// </summary>
        public readonly string IpAddress;
        public readonly string IpId;
        public readonly string? LbId;
        public readonly string? Name;
        /// <summary>
        /// The organization ID the load-balancer is associated with.
        /// </summary>
        public readonly string OrganizationId;
        public readonly ImmutableArray<Outputs.GetLoadbalancerPrivateNetworkResult> PrivateNetworks;
        public readonly string ProjectId;
        public readonly string Region;
        public readonly bool? ReleaseIp;
        /// <summary>
        /// (Optional) The tags associated with the load-balancers.
        /// </summary>
        public readonly ImmutableArray<string> Tags;
        /// <summary>
        /// (Required) The type of the load-balancer.
        /// </summary>
        public readonly string Type;
        public readonly string? Zone;

        [OutputConstructor]
        private GetLoadbalancerResult(
            string id,

            string ipAddress,

            string ipId,

            string? lbId,

            string? name,

            string organizationId,

            ImmutableArray<Outputs.GetLoadbalancerPrivateNetworkResult> privateNetworks,

            string projectId,

            string region,

            bool? releaseIp,

            ImmutableArray<string> tags,

            string type,

            string? zone)
        {
            Id = id;
            IpAddress = ipAddress;
            IpId = ipId;
            LbId = lbId;
            Name = name;
            OrganizationId = organizationId;
            PrivateNetworks = privateNetworks;
            ProjectId = projectId;
            Region = region;
            ReleaseIp = releaseIp;
            Tags = tags;
            Type = type;
            Zone = zone;
        }
    }
}
