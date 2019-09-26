<aside class="main-sidebar sidebar-dark-primary elevation-0">
    <a href="{{ route(home_route()) }}" class="brand-link">
        <i class="fas fa-pencil-alt fa-2x brand-image"></i>
        {{--<img src="" alt="logo" class="brand-image img-circle elevation-3" style="opacity: .8">--}}
        <span class="brand-text font-weight-light">{{ app_name() }}</span>
    </a>
    <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="{{ $logged_in_user->picture }}" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">{{ $logged_in_user->full_name }}</a>
            </div>
        </div>
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-header">@lang('menus.backend.sidebar.general')</li>
                <li class="nav-item">
                    <a class="nav-link {{active_class(Route::is('admin.dashboard'))}}" href="{{ route('admin.dashboard') }}">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>@lang('menus.backend.sidebar.dashboard')</p>
                    </a>
                </li>
                @if ($logged_in_user->isAdmin())
                    <li class="nav-header">@lang('menus.backend.sidebar.system')</li>
                    <li class="nav-item has-treeview {{active_class(Route::is('admin.auth*'), 'menu-open') }}">
                        <a class="nav-link {{active_class(Route::is('admin.auth*'))}}" href="#">
                            <i class="nav-icon far fa-user"></i>
                            <p>
                                @lang('menus.backend.access.title')
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview" style="display: {{ active_class(Route::is('admin.auth*'), 'block', 'none') }};">
                            <li class="nav-item">
                                <a class="nav-link {{active_class(Route::is('admin.auth.user*'))}}" href="{{ route('admin.auth.user.index') }}">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>
                                        @lang('labels.backend.access.users.management')
                                        @if ($pending_approval > 0)
                                            <span class="right badge badge-danger">{{ $pending_approval }}</span>
                                        @endif
                                    </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{active_class(Route::is('admin.auth.role*'))}}" href="{{ route('admin.auth.role.index') }}">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>@lang('labels.backend.access.roles.management')</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item has-treeview {{active_class(Route::is('log-viewer::*'), 'menu-open')}}">
                        <a class="nav-link {{active_class(Route::is('log-viewer::*'))}}" href="#">
                            <i class="nav-icon fas fa-list"></i>
                            <p>
                                @lang('menus.backend.log-viewer.main')
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview" style="display: {{ active_class(Route::is('log-viewer*'), 'block', 'none') }};">
                            <li class="nav-item">
                                <a class="nav-link {{active_class(Route::is('log-viewer::dashboard'))}}" href="{{ route('log-viewer::dashboard') }}">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>@lang('menus.backend.log-viewer.dashboard')</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{active_class(Route::is('log-viewer::logs*'))}}" href="{{ route('log-viewer::logs.list') }}">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>@lang('menus.backend.log-viewer.logs')</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                @endif
            </ul>
        </nav>
    </div>
</aside>