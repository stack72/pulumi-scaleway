// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Creates and manages Scaleway Compute Instance IPs. For more information, see [the documentation](https://developers.scaleway.com/en/products/instance/api/#ips-268151).
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-scaleway/sdk/go/scaleway"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := scaleway.NewInstanceIp(ctx, "serverIp", nil)
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// IPs can be imported using the `{zone}/{id}`, e.g. bash
//
// ```sh
//  $ pulumi import scaleway:index/instanceIp:InstanceIp server_ip fr-par-1/11111111-1111-1111-1111-111111111111
// ```
type InstanceIp struct {
	pulumi.CustomResourceState

	// The IP address.
	Address pulumi.StringOutput `pulumi:"address"`
	// The organization ID the IP is associated with.
	OrganizationId pulumi.StringOutput `pulumi:"organizationId"`
	// `projectId`) The ID of the project the IP is associated with.
	ProjectId pulumi.StringOutput `pulumi:"projectId"`
	// The reverse dns attached to this IP
	Reverse pulumi.StringOutput `pulumi:"reverse"`
	// The server associated with this IP
	ServerId pulumi.StringOutput `pulumi:"serverId"`
	// `zone`) The zone in which the IP should be reserved.
	Zone pulumi.StringOutput `pulumi:"zone"`
}

// NewInstanceIp registers a new resource with the given unique name, arguments, and options.
func NewInstanceIp(ctx *pulumi.Context,
	name string, args *InstanceIpArgs, opts ...pulumi.ResourceOption) (*InstanceIp, error) {
	if args == nil {
		args = &InstanceIpArgs{}
	}

	var resource InstanceIp
	err := ctx.RegisterResource("scaleway:index/instanceIp:InstanceIp", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetInstanceIp gets an existing InstanceIp resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetInstanceIp(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *InstanceIpState, opts ...pulumi.ResourceOption) (*InstanceIp, error) {
	var resource InstanceIp
	err := ctx.ReadResource("scaleway:index/instanceIp:InstanceIp", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering InstanceIp resources.
type instanceIpState struct {
	// The IP address.
	Address *string `pulumi:"address"`
	// The organization ID the IP is associated with.
	OrganizationId *string `pulumi:"organizationId"`
	// `projectId`) The ID of the project the IP is associated with.
	ProjectId *string `pulumi:"projectId"`
	// The reverse dns attached to this IP
	Reverse *string `pulumi:"reverse"`
	// The server associated with this IP
	ServerId *string `pulumi:"serverId"`
	// `zone`) The zone in which the IP should be reserved.
	Zone *string `pulumi:"zone"`
}

type InstanceIpState struct {
	// The IP address.
	Address pulumi.StringPtrInput
	// The organization ID the IP is associated with.
	OrganizationId pulumi.StringPtrInput
	// `projectId`) The ID of the project the IP is associated with.
	ProjectId pulumi.StringPtrInput
	// The reverse dns attached to this IP
	Reverse pulumi.StringPtrInput
	// The server associated with this IP
	ServerId pulumi.StringPtrInput
	// `zone`) The zone in which the IP should be reserved.
	Zone pulumi.StringPtrInput
}

func (InstanceIpState) ElementType() reflect.Type {
	return reflect.TypeOf((*instanceIpState)(nil)).Elem()
}

type instanceIpArgs struct {
	// `projectId`) The ID of the project the IP is associated with.
	ProjectId *string `pulumi:"projectId"`
	// `zone`) The zone in which the IP should be reserved.
	Zone *string `pulumi:"zone"`
}

// The set of arguments for constructing a InstanceIp resource.
type InstanceIpArgs struct {
	// `projectId`) The ID of the project the IP is associated with.
	ProjectId pulumi.StringPtrInput
	// `zone`) The zone in which the IP should be reserved.
	Zone pulumi.StringPtrInput
}

func (InstanceIpArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*instanceIpArgs)(nil)).Elem()
}

type InstanceIpInput interface {
	pulumi.Input

	ToInstanceIpOutput() InstanceIpOutput
	ToInstanceIpOutputWithContext(ctx context.Context) InstanceIpOutput
}

func (*InstanceIp) ElementType() reflect.Type {
	return reflect.TypeOf((*InstanceIp)(nil))
}

func (i *InstanceIp) ToInstanceIpOutput() InstanceIpOutput {
	return i.ToInstanceIpOutputWithContext(context.Background())
}

func (i *InstanceIp) ToInstanceIpOutputWithContext(ctx context.Context) InstanceIpOutput {
	return pulumi.ToOutputWithContext(ctx, i).(InstanceIpOutput)
}

type InstanceIpOutput struct{ *pulumi.OutputState }

func (InstanceIpOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*InstanceIp)(nil))
}

func (o InstanceIpOutput) ToInstanceIpOutput() InstanceIpOutput {
	return o
}

func (o InstanceIpOutput) ToInstanceIpOutputWithContext(ctx context.Context) InstanceIpOutput {
	return o
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*InstanceIpInput)(nil)).Elem(), &InstanceIp{})
	pulumi.RegisterOutputType(InstanceIpOutput{})
}
