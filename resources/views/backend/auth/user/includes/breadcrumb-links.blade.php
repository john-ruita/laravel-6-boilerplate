<div class="btn-group float-right" role="group" aria-label="Button group">
    <div class="dropdown">
        <a class="btn btn-success btn-sm dropdown-toggle" href="#" role="button" id="breadcrumb-dropdown-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">@lang('menus.backend.access.users.main')</a>

        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="breadcrumb-dropdown-1">
            <a class="dropdown-item" href="{{ route('admin.auth.user.index') }}">@lang('menus.backend.access.users.all')</a>
            <a class="dropdown-item" href="{{ route('admin.auth.user.create') }}">@lang('menus.backend.access.users.create')</a>
            <a class="dropdown-item" href="{{ route('admin.auth.user.deactivated') }}">@lang('menus.backend.access.users.deactivated')</a>
            <a class="dropdown-item" href="{{ route('admin.auth.user.deleted') }}">@lang('menus.backend.access.users.deleted')</a>
        </div>
    </div>
</div>
