(function ($) {
    $.fn.login = function (options) {
        options = $.extend({}, $.fn.login.defaultOptions, options);

        return this.each(function () {
            $(this).append(
                $('<form>', {
                    id: options.formId,
                    action: options.action,
                    method: options.method
                }).append(
                    $('<div>', {
                        class: 'card'
                    }).append(
                        $('<div>', {
                            class: 'card-header',
                            id: 'login_card_header',
                            text: options.title
                        }),
                        $('<div>', {
                            class: 'card-body',
                            id: 'login_card_body'
                        }).append(
                            $('<div>', {
                                class: 'form-group'
                            }).append(
                                $('<label>', {
                                    text: options.userLabel,
                                    for: options.userId
                                }),
                                $('<input>', {
                                    type: 'text',
                                    class: 'form-control',
                                    placeholder: options.userPlaceholder,
                                    required: true,
                                    name: options.userName,
                                    id: options.userId,
                                }),
                            ),
                            $('<div>', {
                                class: 'form-group'
                            }).append(
                                $('<label>', {
                                    text: options.passwordLabel,
                                    for: options.passwordId
                                }),
                                $('<input>', {
                                    type: 'password',
                                    class: 'form-control',
                                    placeholder: options.passwordPlaceholder,
                                    required: true,
                                    name: options.passwordName,
                                    id: options.passwordId,
                                }),
                            )
                        ),
                        $('<div>', {
                            class: 'card-footer',
                            id: 'login_card_footer'
                        }).append(
                            $('<button>', {
                                text: options.buttonLabel,
                                class: options.buttonClass,
                                id: options.buttonId
                            })
                        )
                    )
                )
            );

            if (options.ajax) {
                $("#" + options.formId).on('submit', function (e) {
                    e.preventDefault();
                    $.ajax({
                        type: options.method,
                        dataType: 'json',
                        url: options.action,
                        data: $("#" + options.formId).serialize(),
                        beforeSend: options.beforeSend,
                        success: options.success,
                        error: options.error
                    });
                });
            }
        });
    };

    $.fn.login.defaultOptions = {
        method: 'post',
        title: 'Login',
        formId: 'login_form',
        action: '',
        buttonClass: 'btn btn-primary btn-block',
        buttonLabel: 'Sign in',
        userId: 'userInput',
        userName: 'user',
        userLabel: 'User',
        userPlaceholder: 'User',
        passwordId: 'passwordInput',
        passwordName: 'password',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Password',
        buttonId: 'btn_login',
        ajax: true,
        beforeSend: function () { },
        success: function () {console.log('success'); },
        error: function () {console.log('Error!');}
    };

}(jQuery));