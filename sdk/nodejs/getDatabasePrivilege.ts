// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Gets information about the privilege on a RDB database.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 *
 * // Get the database privilege for the user "my-user" on the database "my-database" hosted on instance id fr-par/11111111-1111-1111-1111-111111111111
 * const findPriv = pulumi.output(scaleway.getDatabasePrivilege({
 *     databaseName: "my-database",
 *     instanceId: "fr-par/11111111-1111-111111111111",
 *     userName: "my-user",
 * }));
 * ```
 */
export function getDatabasePrivilege(args: GetDatabasePrivilegeArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabasePrivilegeResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("scaleway:index/getDatabasePrivilege:getDatabasePrivilege", {
        "databaseName": args.databaseName,
        "instanceId": args.instanceId,
        "userName": args.userName,
    }, opts);
}

/**
 * A collection of arguments for invoking getDatabasePrivilege.
 */
export interface GetDatabasePrivilegeArgs {
    /**
     * The database name.
     */
    databaseName: string;
    /**
     * The RDB instance ID.
     */
    instanceId: string;
    /**
     * The user name.
     */
    userName: string;
}

/**
 * A collection of values returned by getDatabasePrivilege.
 */
export interface GetDatabasePrivilegeResult {
    readonly databaseName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly instanceId: string;
    /**
     * The permission for this user on the database. Possible values are `readonly`, `readwrite`, `all`, `custom` and `none`.
     */
    readonly permission: string;
    readonly userName: string;
}

export function getDatabasePrivilegeOutput(args: GetDatabasePrivilegeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabasePrivilegeResult> {
    return pulumi.output(args).apply(a => getDatabasePrivilege(a, opts))
}

/**
 * A collection of arguments for invoking getDatabasePrivilege.
 */
export interface GetDatabasePrivilegeOutputArgs {
    /**
     * The database name.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The RDB instance ID.
     */
    instanceId: pulumi.Input<string>;
    /**
     * The user name.
     */
    userName: pulumi.Input<string>;
}
