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
    public static class GetDatabasePrivilege
    {
        /// <summary>
        /// Gets information about the privilege on a RDB database.
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
        ///         var findPriv = Output.Create(Scaleway.GetDatabasePrivilege.InvokeAsync(new Scaleway.GetDatabasePrivilegeArgs
        ///         {
        ///             DatabaseName = "my-database",
        ///             InstanceId = "fr-par/11111111-1111-111111111111",
        ///             UserName = "my-user",
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetDatabasePrivilegeResult> InvokeAsync(GetDatabasePrivilegeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDatabasePrivilegeResult>("scaleway:index/getDatabasePrivilege:getDatabasePrivilege", args ?? new GetDatabasePrivilegeArgs(), options.WithVersion());

        /// <summary>
        /// Gets information about the privilege on a RDB database.
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
        ///         var findPriv = Output.Create(Scaleway.GetDatabasePrivilege.InvokeAsync(new Scaleway.GetDatabasePrivilegeArgs
        ///         {
        ///             DatabaseName = "my-database",
        ///             InstanceId = "fr-par/11111111-1111-111111111111",
        ///             UserName = "my-user",
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Output<GetDatabasePrivilegeResult> Invoke(GetDatabasePrivilegeInvokeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.Invoke<GetDatabasePrivilegeResult>("scaleway:index/getDatabasePrivilege:getDatabasePrivilege", args ?? new GetDatabasePrivilegeInvokeArgs(), options.WithVersion());
    }


    public sealed class GetDatabasePrivilegeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The database name.
        /// </summary>
        [Input("databaseName", required: true)]
        public string DatabaseName { get; set; } = null!;

        /// <summary>
        /// The RDB instance ID.
        /// </summary>
        [Input("instanceId", required: true)]
        public string InstanceId { get; set; } = null!;

        /// <summary>
        /// The user name.
        /// </summary>
        [Input("userName", required: true)]
        public string UserName { get; set; } = null!;

        public GetDatabasePrivilegeArgs()
        {
        }
    }

    public sealed class GetDatabasePrivilegeInvokeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The database name.
        /// </summary>
        [Input("databaseName", required: true)]
        public Input<string> DatabaseName { get; set; } = null!;

        /// <summary>
        /// The RDB instance ID.
        /// </summary>
        [Input("instanceId", required: true)]
        public Input<string> InstanceId { get; set; } = null!;

        /// <summary>
        /// The user name.
        /// </summary>
        [Input("userName", required: true)]
        public Input<string> UserName { get; set; } = null!;

        public GetDatabasePrivilegeInvokeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDatabasePrivilegeResult
    {
        public readonly string DatabaseName;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string InstanceId;
        /// <summary>
        /// The permission for this user on the database. Possible values are `readonly`, `readwrite`, `all`, `custom` and `none`.
        /// </summary>
        public readonly string Permission;
        public readonly string UserName;

        [OutputConstructor]
        private GetDatabasePrivilegeResult(
            string databaseName,

            string id,

            string instanceId,

            string permission,

            string userName)
        {
            DatabaseName = databaseName;
            Id = id;
            InstanceId = instanceId;
            Permission = permission;
            UserName = userName;
        }
    }
}
