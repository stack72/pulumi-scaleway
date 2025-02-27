// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Scaleway.Inputs
{

    public sealed class LoadbalancerFrontendAclMatchArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The HTTP filter to match. This filter is supported only if your backend protocol has an HTTP forward protocol.
        /// It extracts the request's URL path, which starts at the first slash and ends before the question mark (without the host part).
        /// Possible values are: `acl_http_filter_none`, `path_begin`, `path_end` or `regex`.
        /// </summary>
        [Input("httpFilter")]
        public Input<string>? HttpFilter { get; set; }

        [Input("httpFilterValues")]
        private InputList<string>? _httpFilterValues;

        /// <summary>
        /// A list of possible values to match for the given HTTP filter.
        /// </summary>
        public InputList<string> HttpFilterValues
        {
            get => _httpFilterValues ?? (_httpFilterValues = new InputList<string>());
            set => _httpFilterValues = value;
        }

        /// <summary>
        /// If set to `true`, the condition will be of type "unless".
        /// </summary>
        [Input("invert")]
        public Input<bool>? Invert { get; set; }

        [Input("ipSubnets")]
        private InputList<string>? _ipSubnets;

        /// <summary>
        /// A list of IPs or CIDR v4/v6 addresses of the client of the session to match.
        /// </summary>
        public InputList<string> IpSubnets
        {
            get => _ipSubnets ?? (_ipSubnets = new InputList<string>());
            set => _ipSubnets = value;
        }

        public LoadbalancerFrontendAclMatchArgs()
        {
        }
    }
}
