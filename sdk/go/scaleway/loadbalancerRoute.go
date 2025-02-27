// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type LoadbalancerRoute struct {
	pulumi.CustomResourceState

	// The backend ID destination of redirection
	BackendId pulumi.StringOutput `pulumi:"backendId"`
	// The frontend ID origin of redirection
	FrontendId pulumi.StringOutput `pulumi:"frontendId"`
	// The domain to match against
	MatchSni pulumi.StringPtrOutput `pulumi:"matchSni"`
}

// NewLoadbalancerRoute registers a new resource with the given unique name, arguments, and options.
func NewLoadbalancerRoute(ctx *pulumi.Context,
	name string, args *LoadbalancerRouteArgs, opts ...pulumi.ResourceOption) (*LoadbalancerRoute, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.BackendId == nil {
		return nil, errors.New("invalid value for required argument 'BackendId'")
	}
	if args.FrontendId == nil {
		return nil, errors.New("invalid value for required argument 'FrontendId'")
	}
	var resource LoadbalancerRoute
	err := ctx.RegisterResource("scaleway:index/loadbalancerRoute:LoadbalancerRoute", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetLoadbalancerRoute gets an existing LoadbalancerRoute resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLoadbalancerRoute(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *LoadbalancerRouteState, opts ...pulumi.ResourceOption) (*LoadbalancerRoute, error) {
	var resource LoadbalancerRoute
	err := ctx.ReadResource("scaleway:index/loadbalancerRoute:LoadbalancerRoute", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering LoadbalancerRoute resources.
type loadbalancerRouteState struct {
	// The backend ID destination of redirection
	BackendId *string `pulumi:"backendId"`
	// The frontend ID origin of redirection
	FrontendId *string `pulumi:"frontendId"`
	// The domain to match against
	MatchSni *string `pulumi:"matchSni"`
}

type LoadbalancerRouteState struct {
	// The backend ID destination of redirection
	BackendId pulumi.StringPtrInput
	// The frontend ID origin of redirection
	FrontendId pulumi.StringPtrInput
	// The domain to match against
	MatchSni pulumi.StringPtrInput
}

func (LoadbalancerRouteState) ElementType() reflect.Type {
	return reflect.TypeOf((*loadbalancerRouteState)(nil)).Elem()
}

type loadbalancerRouteArgs struct {
	// The backend ID destination of redirection
	BackendId string `pulumi:"backendId"`
	// The frontend ID origin of redirection
	FrontendId string `pulumi:"frontendId"`
	// The domain to match against
	MatchSni *string `pulumi:"matchSni"`
}

// The set of arguments for constructing a LoadbalancerRoute resource.
type LoadbalancerRouteArgs struct {
	// The backend ID destination of redirection
	BackendId pulumi.StringInput
	// The frontend ID origin of redirection
	FrontendId pulumi.StringInput
	// The domain to match against
	MatchSni pulumi.StringPtrInput
}

func (LoadbalancerRouteArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*loadbalancerRouteArgs)(nil)).Elem()
}

type LoadbalancerRouteInput interface {
	pulumi.Input

	ToLoadbalancerRouteOutput() LoadbalancerRouteOutput
	ToLoadbalancerRouteOutputWithContext(ctx context.Context) LoadbalancerRouteOutput
}

func (*LoadbalancerRoute) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadbalancerRoute)(nil))
}

func (i *LoadbalancerRoute) ToLoadbalancerRouteOutput() LoadbalancerRouteOutput {
	return i.ToLoadbalancerRouteOutputWithContext(context.Background())
}

func (i *LoadbalancerRoute) ToLoadbalancerRouteOutputWithContext(ctx context.Context) LoadbalancerRouteOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadbalancerRouteOutput)
}

type LoadbalancerRouteOutput struct{ *pulumi.OutputState }

func (LoadbalancerRouteOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadbalancerRoute)(nil))
}

func (o LoadbalancerRouteOutput) ToLoadbalancerRouteOutput() LoadbalancerRouteOutput {
	return o
}

func (o LoadbalancerRouteOutput) ToLoadbalancerRouteOutputWithContext(ctx context.Context) LoadbalancerRouteOutput {
	return o
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*LoadbalancerRouteInput)(nil)).Elem(), &LoadbalancerRoute{})
	pulumi.RegisterOutputType(LoadbalancerRouteOutput{})
}
